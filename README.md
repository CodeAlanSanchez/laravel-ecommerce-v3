# Laravel Ecommerce v3

This is an ecommerce project built in Laravel using Inertia, React, Breeze, Tailwind, and PostgreSQL

# Installation

1. run `git clone https://github.com/CodeAlanSanchez/laravel-ecommerce-v3`

2. cd into project directory

3. run `composer install`

4. run `npm install`

5. run `cp .env.example .env`

6. fill in .env file with details

7. run `php artisan storage:link`

8. Add default images for men `./public/storage/image/men.png`, women `./public/storage/image/men.png`, and products `./public/storage/image/placeholder_image.png`

9. run `php artisan key:generate`

10. run `php artisan migrate:fresh --seed`

11. run `npm run build`

12. run `php artisan serve`
