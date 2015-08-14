module Searchable
  extend ActiveSupport::Concern

  def search(query)
    query = query.split(', ')
    targets = controller_name.classify.constantize.select do |thing|
      query.all? do |query_segment|
        thing.tags.any? do |tag|
          tag.label.include? query_segment
        end
      end
    end
    instance_variable_set("@#{controller_name}", targets)

    render :search
  end
end
