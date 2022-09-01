

if Rails.env === 'production'
    Rails.application.config.session_store :cookie_store, key: 'school-management-app', domain: 'http://localhost:3001'
else
    Rails.application.config.session_store :cookie_store, key: 'school-management-app'
end

