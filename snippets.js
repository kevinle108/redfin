// house_hoa: https://www.redfin.com/KY/Louisville/3901-Valley-Station-Rd-40272/home/84172457
// house_no_hoa: https://www.redfin.com/KY/Louisville/8110-Kellerman-Rd-40219/home/71182885

function get_home_facts_info(info) {
    // Examples
    // 'Price/Sq.Ft.'
    // 'Year Built'
    let ele = Array.from(document.querySelectorAll('span')).find(el => el.textContent === info);
    let data = ''

    data = ele.nextSibling.innerText

    // if (ele.nextSibling.innerText) {
    //     data = ele.nextSibling.innerText
    // }
    // else {
    //     if (info == 'HOA Dues') data = 'none'
    // }

    return data    
}

const url = window.location.href
const address = document.title.split('|')[0]
const price = document.querySelector("div[data-rf-test-id=abp-price]").innerText.split('\n')[0]
const sq_ft = document.querySelector("div[data-rf-test-id=abp-sqFt]").innerText.split('\n')[0]
const bed = document.querySelector("div[data-rf-test-id=abp-beds]").innerText.split('\n')[0]
const bath = document.querySelector("div[data-rf-test-id=abp-baths]").innerText.split('\n')[0]
const price_per_sqft = get_home_facts_info('Price/Sq.Ft.');
const year_built = get_home_facts_info('Year Built');
const lot_size = get_home_facts_info('Lot Size');
// const hoa = get_home_facts_info('HOA Dues') ?? 'none';



let info = {
    url,
    address,
    price,
    bed,
    bath,
    year_built,
    sq_ft,
    price_per_sqft,
    lot_size,
    // hoa    
}

console.table(info)