# config/initializers/reload_locale.rb
# from http://stackoverflow.com/a/20570652/445724

if Rails.env.development?
  locale_reloader = ActiveSupport::FileUpdateChecker.new(Dir["config/locales/*yml"]) do
     I18n.backend.reload!
  end

  ActionDispatch::Callbacks.to_prepare do
    locale_reloader.execute_if_updated
  end
end
