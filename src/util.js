export default function formatCurrency(num){
    return "INR " +  Number(num.toFixed(1)).toLocaleString() + " ";
}