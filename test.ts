import * as cheerio from 'cheerio';

interface Region {
    readable_name: string;
    internal_name: string;
}

const url = 'https://www.azurespeed.com/Information/AzureRegions';
const response = await fetch(url);
const html = await response.text();
const $ = cheerio.load(html);

const availableRegions: Region[] = [];

console.log($.html());
$('h2:contains("Available Regions")')
    .next('div.table-responsive')
    // .find('tbody')
    .each((_, row) => {
        console.log(row.name);
        const displayName = $(row).find('td').eq(1).text().trim();
        const internalName = displayName.replace(/\s+/g, '').toLowerCase();

        availableRegions.push({
            readable_name: displayName,
            internal_name: internalName,
        });
    });

console.log(JSON.stringify(availableRegions, null, 2));
