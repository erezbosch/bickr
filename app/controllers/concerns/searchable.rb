module Searchable
  extend ActiveSupport::Concern

  def search(query)
    query = query.squish.split(', ')
    # tags = Tag.select { |tag| query.any? { |q| tag.label.include? q } }
    # targets = tags.each_with_object([]) do |tag, targets|
    #   tag.send("tagged_#{}")
    #
    #
    # #########
    targets = controller_name.classify.constantize.select do |thing|
      query.all? do |query_segment|
        thing.tags.any? do |tag|
          tag.label.include? query_segment
        end
      end
    end
    instance_variable_set("@#{controller_name}", targets)

    render controller_name == "albums" ? :search : :index
  end
end
