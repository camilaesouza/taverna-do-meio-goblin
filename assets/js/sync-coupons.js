import admin from 'firebase-admin'
import { coupons } from '../../data/coupons.js'

import { readFileSync } from 'fs'
const serviceAccount = JSON.parse(readFileSync('config/firebase-credentials.json'))

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore()

const syncCoupons = async () => {
    const couponsCollection = db.collection('coupons')
    const snapshot = await couponsCollection.get()
    const firestoreCoupons = snapshot.docs.map(docSnap => ({
        id: docSnap.id,
        ...docSnap.data()
    }))

    const localCouponCodes = new Set(coupons.map(c => c.code))

    if (coupons.length === 0) {
        for (const firestoreCoupon of firestoreCoupons) {
            await db.collection('coupons').doc(firestoreCoupon.id).delete()
            console.log(`Deleted coupon ${firestoreCoupon.id}`)
        }
        return
    }

    for (const coupon of coupons) {
        const docRef = db.collection('coupons').doc(coupon.code)
        const existingDoc = await docRef.get()

        const data = {
            code: coupon.code,
            discount: coupon.discount,
            expiresAt: coupon.expiresAt ? admin.firestore.Timestamp.fromDate(new Date(coupon.expiresAt)) : null,
            used: coupon.used || false
        }

        if (existingDoc.exists) {
            await docRef.set(data, { merge: true })
            console.log(`Updated coupon ${coupon.code}`)
        } else {
            await docRef.set(data)
            console.log(`Created coupon ${coupon.code}`)
        }
    }

    for (const firestoreCoupon of firestoreCoupons) {
        if (!localCouponCodes.has(firestoreCoupon.code)) {
            await db.collection('coupons').doc(firestoreCoupon.id).delete()
            console.log(`Deleted obsolete coupon ${firestoreCoupon.code}`)
        }
    }

    console.log('✅ Sync completed.')
}

syncCoupons()
    .then(() => process.exit(0))
    .catch(err => {
        console.error('❌ Error syncing coupons:', err)
        process.exit(1)
    })
