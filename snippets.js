function get_home_facts_info(info) {
    // Examples
    // 'Price/Sq.Ft.'
    // 'Year Built'
    let ele = Array.from(document.querySelectorAll('span')).find(el => el.textContent === info);
    return ele.nextSibling.innerText
}

const address = document.title.split('|')[0]
const price = document.querySelector("div[data-rf-test-id=abp-price]").innerText.split('\n')[0]
const sq_ft = document.querySelector("div[data-rf-test-id=abp-sqFt]").innerText.split('\n')[0]
const bed = document.querySelector("div[data-rf-test-id=abp-beds]").innerText.split('\n')[0]
const bath = document.querySelector("div[data-rf-test-id=abp-baths]").innerText.split('\n')[0]

const price_per_sqft = get_home_facts_info('Price/Sq.Ft.');
const year_built = get_home_facts_info('Year Built');


let info = {
    address,
    price,
    bed,
    bath,
    year_built,
    sq_ft,
    price_per_sqft    
}

console.table(info)



document.querySelector("#content > div.aboveBelowTheRail > div.alongTheRail > div:nth-child(17) > div > div > div:nth-child(4) > div:nth-child(4) > span.header.font-color-gray-light.inline-block")

//span[contains(., 'Price/Sq.Ft.')]





  const x = Array.from(document.querySelectorAll('span'))
  .find(el => el.textContent === 'Price/Sq.Ft.').parentElement;  