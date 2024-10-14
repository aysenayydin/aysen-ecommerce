import React from 'react'

function Footer() {
  return (
    <footer class="bg-primary text-white p-8">
  <div class="max-w-screen-lg mx-auto flex flex-col gap-8 text-left md:text-left">
    <div>
      <h2 class="font-bold text-lg mb-4">Get In Touch</h2>
      <p class="text-sm mb-4">the quick fox jumps over the lazy dog</p>
      <div class="flex md:justify-start space-x-4">
        <a href="#" aria-label="Facebook" class="hover:text-gray-300"><i class="fab fa-facebook-f"></i></a>
        <a href="#" aria-label="Instagram" class="hover:text-gray-300"><i class="fab fa-instagram"></i></a>
        <a href="#" aria-label="Twitter" class="hover:text-gray-300"><i class="fab fa-twitter"></i></a>
      </div>
    </div>
    <div>
      <h2 class="font-bold text-lg mb-4">Company Info</h2>
      <ul class="space-y-2">
        <li><a href="#" class="hover:text-gray-300">About Us</a></li>
        <li><a href="#" class="hover:text-gray-300">Carrier</a></li>
        <li><a href="#" class="hover:text-gray-300">We are hiring</a></li>
        <li><a href="#" class="hover:text-gray-300">Blog</a></li>
      </ul>
    </div>
    <div>
      <h2 class="font-bold text-lg mb-4">Features</h2>
      <ul class="space-y-2">
        <li><a href="#" class="hover:text-gray-300">Business Marketing</a></li>
        <li><a href="#" class="hover:text-gray-300">User Analytic</a></li>
        <li><a href="#" class="hover:text-gray-300">Live Chat</a></li>
        <li><a href="#" class="hover:text-gray-300">Unlimited Support</a></li>
      </ul>
    </div>
    <div>
      <h2 class="font-bold text-lg mb-4">Resources</h2>
      <ul class="space-y-2">
        <li><a href="#" class="hover:text-gray-300">IOS & Android</a></li>
        <li><a href="#" class="hover:text-gray-300">Watch a Demo</a></li>
        <li><a href="#" class="hover:text-gray-300">Customers</a></li>
        <li><a href="#" class="hover:text-gray-300">API</a></li>
      </ul>
    </div>
  </div>
  <div class="mt-8 text-center text-sm bg-gray-200 py-4 text-gray-700">
    Made With Love By Figmaland All Right Reserved
  </div>
</footer>

  )
}

export default Footer 