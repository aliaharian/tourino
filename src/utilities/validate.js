import { numberFormat } from "."

const isMobile = (e) => {
    let phone = numberFormat.toEnglishDigitsOnlyNum(e);
    if (phone.length < 11 || phone.length > 11 || phone.substring(0, 2) !== "09") {
        return false
    } else
        return true
}


export default{
    isMobile
}