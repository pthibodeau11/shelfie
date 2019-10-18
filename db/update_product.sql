UPDATE product
SET product_name = $2, product_image_url = $3, product_price = $4 
WHERE product_id = $1