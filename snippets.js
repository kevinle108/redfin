// house_hoa: https://www.redfin.com/KY/Louisville/3901-Valley-Station-Rd-40272/home/84172457
// house_no_hoa: https://www.redfin.com/KY/Louisville/8110-Kellerman-Rd-40219/home/71182885

function get_value_sib(feature) {
    const xpath = `//span[contains(text(),'${feature}')]//following-sibling::span`;
    const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    try {
        return result.singleNodeValue.textContent
    } catch (error) {
        return null
    } 
}

function get_value(feature) {
    const xpath = `//span[contains(text(),'${feature}')]/span`;
    const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    try {
        return result.singleNodeValue.textContent
    } catch (error) {
        return null
    } 
}

// const url = window.location.href
// const address = document.title.split('|')[0]
// const price = document.querySelector("div[data-rf-test-id=abp-price]").innerText.split('\n')[0]
// const sq_ft = document.querySelector("div[data-rf-test-id=abp-sqFt]").innerText.split('\n')[0]
// const bed = document.querySelector("div[data-rf-test-id=abp-beds]").innerText.split('\n')[0]
// const bath = document.querySelector("div[data-rf-test-id=abp-baths]").innerText.split('\n')[0]



// const price_per_sqft = get_home_facts_info('Price/Sq.Ft.');
// const year_built = get_home_facts_info('Year Built: ');
// const lot_size = get_home_facts_info('Lot Size');
// const hoa = get_home_facts_info('HOA Dues');
// const basement = get_feature_child('Has Basement') ?? 'none'


let info = {
    url: window.location.href,
    address: document.title.split('|')[0],
    price: document.querySelector("div[data-rf-test-id=abp-price]").innerText.split('\n')[0],
    sq_ft: document.querySelector("div[data-rf-test-id=abp-sqFt]").innerText.split('\n')[0],
    price_per_sqft: get_value_sib('Price/Sq.Ft.'),
    bed_bath: document.querySelector("div[data-rf-test-id=abp-beds]").innerText.split('\n')[0] + ' bed, ' + document.querySelector("div[data-rf-test-id=abp-baths]").innerText.split('\n')[0] + ' bath',
    year_built: get_value('Year Built: '),
    age: get_value('Age: '),
    lot_size: get_value_sib('Lot Size'),
    property_type: get_value_sib('Property Type'),
    sqft_finished: get_value('Sq. Ft. (Total Finished): '),
    sqft_unfinished: get_value('Sq. Ft. (Total Unfinished): '),
    acres: get_value('Acres: ')
}

console.table(info)
// localStorage.setItem('saved', JSON.stringify(info))
// let fromLocal = localStorage.getItem('saved')
// console.log(JSON.parse(fromLocal))