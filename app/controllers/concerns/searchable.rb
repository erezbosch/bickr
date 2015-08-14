module Searchable
  extend ActiveSupport::Concern

  def search(query)
    query = query.downcase.squish.split(', ')
    targets = controller_name.classify.constantize.select do |thing|
      query.all? do |query_segment|
        thing.tags.any? { |tag| tag.label.downcase.include?(query_segment) } ||
          thing.title.downcase.include?(query_segment)
      end
    end
    instance_variable_set("@#{controller_name}", targets)

    render controller_name == "albums" ? :search : :index
  end
end
