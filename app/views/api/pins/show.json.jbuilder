json.extract! @pin, :id, :title, :description, :uploader_id
json.imageUrl url_for(@pin.image)