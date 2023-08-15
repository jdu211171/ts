/*
Callbacks are functions that are passed as arguments to another function and are executed when an asynchronous operation completes.
*/

function fetchData(callback: (data: string) => void): void {
    setTimeout(() => {
        const data = "Fetched data";
        callback(data);
    }, 1000);
}

function processFetchedData(data: string): void {
    console.log("Processing:", data);
}

fetchData(processFetchedData);
console.log("Fetching data...");