json.array!(@beans) do |bean|
  json.extract! bean, :id, :name, :roast, :quantity
  json.url bean_url(bean, format: :json)
end
