@pins.each do |pin|
    json.set! pin.id do
        json.extract! pin, :id, :title, :description, :uploader_id
    end
end