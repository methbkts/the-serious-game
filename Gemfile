source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "2.7.7"

gem 'rails', '~> 5.2'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.2'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.5'
gem 'puma', '~> 5.6'
gem 'bootsnap', require: false
gem 'devise'
gem 'bootstrap', '~> 4.0'
gem 'jquery-rails'
gem 'jquery-turbolinks'
gem 'font-awesome-sass', "~> 4.7.0"
gem "autoprefixer-rails"

group :development, :test do
  gem 'sqlite3'
  gem "debug", "~> 1.5", platforms: %i[ mri mingw x64_mingw ]
end

group :development do
  gem 'web-console', '>= 3.3.0'
end

group :test do
  gem 'capybara', '~> 2.13'
  gem 'selenium-webdriver'
end

group :production do
  gem 'pg', '~> 1.3'
end
