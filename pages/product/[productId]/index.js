import {useRouter} from 'next/router'

export default function ProductDetails(){
    const router = useRouter()
    const {productId} = router.query
    return(
        <h1>Details about product {productId}</h1>
    )
}