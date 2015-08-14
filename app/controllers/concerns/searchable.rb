module Searchable
  extend ActiveSupport::Concern

  def search
    # search_params should be params[:something] -- QS param provided by Bb
    controller_name.classify.constantize.select do |thing|
      search_params.all? do |param|
        thing.tags.any? do |tag|
          tag.label.include? param
        end
      end
    end
  end
end
