const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getData(res: any) {
    await wait(3000)
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
return res
}