import {chromium} from "playwright";

performance.now = () => 2147483647

async function main() {
    const browser = await chromium.connect('ws://127.0.0.1:3001');
}

main()
