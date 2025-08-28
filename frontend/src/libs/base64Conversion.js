export const toBase64 = (file) => {
    console.log(file)
    return new Promise((resolve,reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file);
        reader.onload = () => {
            console.log(reader.result.split(",")[1])
            resolve(reader.result.split(",")[1]);
        }
        reader.onerror = (error) => reject(error)
    })
}