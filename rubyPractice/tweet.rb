class Tweet
    attr_reader :message

    @@all = []
    
    def initialize(message)
        @message = message


        @@all << self
    end








end

# my_tweet = Tweet.new("a good tweet")