import { Button } from "../ui/button";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import Navbar from "./navbar";

export default function Landing() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <Navbar />

            {/* Hero Section */}
            <section className="bg-gray-50 py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl lg:text-6xl font-bold text-black leading-tight mb-6">
                                FIND ADAPTIVE
                                <br />
                                INCLUSIVE CLOTHES
                                <br />
                                THAT MATCHES YOU
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 max-w-md">
                                We offer sensory clothing and adaptive wear
                                clothing to help you get your best dressed and
                                feel confident every day.
                            </p>
                            <Button
                                size="lg"
                                className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800"
                            >
                                Shop Now
                            </Button>

                            <div className="flex items-center space-x-8 mt-12">
                                <div>
                                    <div className="text-2xl font-bold">
                                        The Shapes
                                    </div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold">
                                        2,000+
                                    </div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold">
                                        30,000+
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-gray-200 rounded-lg overflow-hidden">
                                <img
                                    src="/woman-in-black-adaptive-clothing.png"
                                    alt="Woman wearing black adaptive clothing"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            {/* Decorative stars */}
                            <div className="absolute top-8 right-8 text-4xl">
                                ✦
                            </div>
                            <div className="absolute bottom-16 left-8 text-2xl">
                                ✦
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Brand Banner */}
            <section className="bg-black text-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl lg:text-4xl font-bold tracking-wider">
                        THE SHAPES UNITED
                    </h2>
                </div>
            </section>

            {/* Browse Collections */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
                        BROWSE BY COLLECTION LIST
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                            <div className="aspect-square bg-orange-100 relative">
                                <img
                                    src="/adaptive-clothing-collection.png"
                                    alt="The Adaptive Collection"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <CardContent className="p-6">
                                <CardTitle className="text-xl">
                                    The Adaptive Collection
                                </CardTitle>
                            </CardContent>
                        </Card>

                        <Card className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                            <div className="aspect-square bg-gray-100 relative">
                                <img
                                    src="/sensory-clothing-collection.png"
                                    alt="The Sensory Collection"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <CardContent className="p-6">
                                <CardTitle className="text-xl">
                                    The Sensory Collection
                                </CardTitle>
                            </CardContent>
                        </Card>

                        <Card className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                            <div className="aspect-square bg-gray-100 relative">
                                <img
                                    src="/mens-clothing-collection.png"
                                    alt="Men's Collection"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <CardContent className="p-6">
                                <CardTitle className="text-xl">Men's</CardTitle>
                            </CardContent>
                        </Card>

                        <Card className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                            <div className="aspect-square bg-blue-100 relative">
                                <img
                                    src="/kids-clothing-collection.png"
                                    alt="Kids Collection"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <CardContent className="p-6">
                                <CardTitle className="text-xl">Kids</CardTitle>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* New Arrivals */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
                        NEW ARRIVALS
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {[
                            {
                                name: "The Adaptive Polo Shirt",
                                price: "$89.95 AUD",
                                rating: 4.5,
                                image: "/black-adaptive-polo-shirt.png",
                            },
                            {
                                name: "Comfy Pants",
                                price: "$89.95 AUD",
                                rating: 4.7,
                                image: "/black-comfortable-pants.png",
                            },
                            {
                                name: "Cotton Cushion Foot Seamless Long leg Sock",
                                price: "$10.00 AUD",
                                rating: 4.8,
                                image: "/purple-seamless-socks.png",
                            },
                            {
                                name: "The Iron on Pocket",
                                price: "$10.00 AUD",
                                rating: 4.6,
                                image: "/iron-on-clothing-pocket.png",
                            },
                        ].map((product, index) => (
                            /* Replaced product divs with shadcn Card components */
                            <Card
                                key={index}
                                className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                            >
                                <div className="aspect-[3/4] bg-gray-100">
                                    <img
                                        src={
                                            product.image || "/placeholder.svg"
                                        }
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <CardContent className="p-4">
                                    <CardTitle className="text-sm mb-2">
                                        {product.name}
                                    </CardTitle>
                                    <div className="flex items-center mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className={`w-4 h-4 ${
                                                    i <
                                                    Math.floor(product.rating)
                                                        ? "text-yellow-400"
                                                        : "text-gray-300"
                                                }`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                        <Badge
                                            variant="secondary"
                                            className="ml-2 text-xs"
                                        >
                                            {product.rating}
                                        </Badge>
                                    </div>
                                    <p className="font-bold">{product.price}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="text-center">
                        <Button
                            variant="link"
                            className="text-black font-semibold"
                        >
                            View All
                        </Button>
                    </div>
                </div>
            </section>

            {/* Top Selling */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
                        TOP SELLING
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {[
                            {
                                name: "Sock",
                                price: "$10.00 AUD",
                                rating: 4.9,
                                image: "/black-socks-package.png",
                            },
                            {
                                name: "The Adaptive Polo Shirt",
                                price: "$89.95 AUD",
                                rating: 4.5,
                                image: "/white-adaptive-polo-shirt.png",
                            },
                            {
                                name: "The Comfy T-shirt",
                                price: "$54.95 AUD",
                                rating: 4.7,
                                image: "/black-comfortable-t-shirt.png",
                            },
                            {
                                name: "The Adaptive Polo Shirt",
                                price: "$89.95 AUD",
                                rating: 4.6,
                                image: "/black-adaptive-polo-shirt-mens.png",
                            },
                        ].map((product, index) => (
                            /* Replaced product divs with shadcn Card components */
                            <Card
                                key={index}
                                className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                            >
                                <div className="aspect-[3/4] bg-gray-100">
                                    <img
                                        src={
                                            product.image || "/placeholder.svg"
                                        }
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <CardContent className="p-4">
                                    <CardTitle className="text-sm mb-2">
                                        {product.name}
                                    </CardTitle>
                                    <div className="flex items-center mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className={`w-4 h-4 ${
                                                    i <
                                                    Math.floor(product.rating)
                                                        ? "text-yellow-400"
                                                        : "text-gray-300"
                                                }`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                        <Badge
                                            variant="secondary"
                                            className="ml-2 text-xs"
                                        >
                                            {product.rating}
                                        </Badge>
                                    </div>
                                    <p className="font-bold">{product.price}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="text-center">
                        <Button
                            variant="link"
                            className="text-black font-semibold"
                        >
                            View All
                        </Button>
                    </div>
                </div>
            </section>

            {/* Customer Testimonials */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
                        OUR HAPPY CUSTOMERS
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                name: "Sarah M.",
                                rating: 5,
                                text: "Amazing quality and perfect fit! The adaptive features make getting dressed so much easier. Highly recommend!",
                            },
                            {
                                name: "Alex K.",
                                rating: 5,
                                text: "The sensory-friendly fabric is incredibly soft and comfortable. My son loves wearing these clothes!",
                            },
                            {
                                name: "James L.",
                                rating: 5,
                                text: "Excellent customer service and fast shipping. The clothes are exactly what I was looking for.",
                            },
                        ].map((review, index) => (
                            /* Replaced review divs with shadcn Card components */
                            <Card key={index} className="p-6">
                                <CardContent className="p-0">
                                    <div className="flex items-center mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className={`w-5 h-5 ${
                                                    i < review.rating
                                                        ? "text-yellow-400"
                                                        : "text-gray-300"
                                                }`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-gray-600 mb-4">
                                        "{review.text}"
                                    </p>
                                    <p className="font-semibold">
                                        {review.name}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Signup */}
            <section className="bg-black text-white py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                        STAY UP TO DATE ABOUT
                        <br />
                        OUR LATEST OFFERS
                    </h2>

                    <div className="max-w-md mx-auto space-y-4">
                        <Input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full px-4 py-3 rounded-full text-black bg-white border-white"
                        />
                        <Button className="w-full bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100">
                            Subscribe to Newsletter
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-100 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        <div className="lg:col-span-2">
                            <div className="text-xl font-bold mb-4">
                                The Shapes United
                            </div>
                            <p className="text-gray-600 mb-6 max-w-md">
                                The Shapes United is a fashionable, adaptive
                                clothing brand with sensory-friendly features
                                designed for people with disabilities.
                            </p>
                            <div className="flex space-x-4">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                                    </svg>
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                                    </svg>
                                </Button>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-4">Support</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>
                                    <a href="#" className="hover:text-gray-900">
                                        FAQs
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-900">
                                        Size Guide
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-900">
                                        Refund Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-900">
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-4">Website</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>
                                    <a href="#" className="hover:text-gray-900">
                                        Terms of Service
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-900">
                                        Privacy Policy for COVID-19
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-900">
                                        Shipping Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-900">
                                        Accessibility
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-4">Wholesale</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>
                                    <a href="#" className="hover:text-gray-900">
                                        Galleries
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-900">
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-900">
                                        Wholesale Pricing
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 mt-12 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="text-gray-600 text-sm">
                                The Shapes United © 2024-2025, All Rights
                                Reserved
                            </p>
                            <div className="flex space-x-4 mt-4 md:mt-0">
                                <img
                                    src="/visa-logo-generic.png"
                                    alt="Visa"
                                    className="h-6"
                                />
                                <img
                                    src="/mastercard-logo.png"
                                    alt="Mastercard"
                                    className="h-6"
                                />
                                <img
                                    src="/payment/paypal.png"
                                    alt="PayPal"
                                    className="h-6"
                                />
                                <img
                                    src="/payment/apple-pay.png"
                                    alt="Apple Pay"
                                    className="h-6"
                                />
                                <img
                                    src="/payment/google-pay.png"
                                    alt="Google Pay"
                                    className="h-6"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
