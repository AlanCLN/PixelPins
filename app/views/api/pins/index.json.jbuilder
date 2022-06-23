@pins.each do |pin|
    json.set! pin.id do
        json.extract! pin, :id, :title, :description, :uploader_id
        json.imageUrl url_for(pin.image) if pin.image.attached?
    end
end