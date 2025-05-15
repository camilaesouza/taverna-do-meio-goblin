import { collection, query, where, getDocs, doc, setDoc, getDoc, deleteDoc, updateDoc, Timestamp } from 'firebase/firestore'
import { coupons } from '~/data/coupons'
import type { Coupon } from '~/data/coupons'

interface FirestoreCoupon extends Coupon {
    id: string
}

export const useCoupons = () => {
    const validateCoupon = async (code: string) => {
        const { $firestore } = useNuxtApp()

        const q = query(
            collection($firestore, 'coupons'),
            where('code', '==', code),
        )

        const querySnapshot = await getDocs(q)
        if (querySnapshot.empty) {
            return { valid: false, message: 'Cupom inválido.' }
        }

        const couponDoc = querySnapshot.docs[0]
        const data = couponDoc.data()

        if (data.expiresAt) {
            const now = new Date()
            const expiresAtDate = data.expiresAt.toDate()

            if (now > expiresAtDate) {
                return { valid: false, message: 'O cupom expirou.' }
            }
        } else if (data.used) {
            return { valid: false, message: 'Cupom já foi utilizado.' }
        }

        return {
            valid: true,
            discount: data.discount,
            couponId: couponDoc.id,
            isOneTimeUse: !data.expiresAt
        }
    }

    const markCouponAsUsed = async (couponId: string) => {
        const { $firestore } = useNuxtApp()
        await setDoc(doc($firestore, 'coupons', couponId), {
            used: true,
        }, { merge: true })
    }

    return {
        validateCoupon,
        markCouponAsUsed,
    }
}