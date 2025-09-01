import React from "react";
import { Button } from "../ui/button";
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuContent,
    NavigationMenuLink,
} from "../ui/navigation-menu";
import { Input } from "../ui/input";

function Navbar() {
    return (
        <header className="border-b border-gray-200">
            <div className="bg-black text-white text-center py-2 text-sm">
                Sign up and get 20% off your first order. Sign Up Now
                <Button
                    variant="ghost"
                    size="sm"
                    className="ml-2 text-white hover:text-gray-300 h-auto p-0"
                >
                    ×
                </Button>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="text-xl font-bold">
                            the
                            <br />
                            shapes
                            <br />
                            united
                        </div>
                    </div>

                    <NavigationMenu className="hidden md:flex">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    MENS
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="grid gap-3 w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                        <div className="row-span-3">
                                            <NavigationMenuLink asChild>
                                                <a
                                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                    href="/"
                                                >
                                                    <div className="mb-2 mt-4 text-lg font-medium">
                                                        MENS COLLECTION
                                                    </div>
                                                    <p className="text-sm leading-tight text-muted-foreground">
                                                        Adaptive and
                                                        sensory-friendly
                                                        clothing designed for
                                                        comfort and style.
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </div>
                                        <NavigationMenuLink href="/mens/shirts">
                                            <div className="text-sm font-medium leading-none">
                                                Shirts
                                            </div>
                                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                Adaptive polo shirts and
                                                t-shirts
                                            </p>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink href="/mens/pants">
                                            <div className="text-sm font-medium leading-none">
                                                Pants
                                            </div>
                                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                Comfortable and easy-to-wear
                                                pants
                                            </p>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink href="/mens/accessories">
                                            <div className="text-sm font-medium leading-none">
                                                Accessories
                                            </div>
                                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                Socks, belts, and other
                                                essentials
                                            </p>
                                        </NavigationMenuLink>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    Women's
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="grid gap-3 p-6 w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                        <div className="row-span-3">
                                            <NavigationMenuLink asChild>
                                                <a
                                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                    href="/"
                                                >
                                                    <div className="mb-2 mt-4 text-lg font-medium">
                                                        Women's Collection
                                                    </div>
                                                    <p className="text-sm leading-tight text-muted-foreground">
                                                        Stylish adaptive
                                                        clothing with
                                                        sensory-friendly
                                                        features.
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </div>
                                        <NavigationMenuLink href="/womens/tops">
                                            <div className="text-sm font-medium leading-none">
                                                Tops
                                            </div>
                                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                Comfortable shirts and blouses
                                            </p>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink href="/womens/dresses">
                                            <div className="text-sm font-medium leading-none">
                                                Dresses
                                            </div>
                                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                Easy-to-wear adaptive dresses
                                            </p>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink href="/womens/bottoms">
                                            <div className="text-sm font-medium leading-none">
                                                Bottoms
                                            </div>
                                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                Pants, skirts, and shorts
                                            </p>
                                        </NavigationMenuLink>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    href="/kids"
                                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50"
                                >
                                    Kids
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    About Us
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="grid gap-3 p-6 w-[400px]">
                                        <NavigationMenuLink href="/about">
                                            <div className="text-sm font-medium leading-none">
                                                Our Story
                                            </div>
                                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                Learn about our mission and
                                                values
                                            </p>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink href="/team">
                                            <div className="text-sm font-medium leading-none">
                                                Our Team
                                            </div>
                                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                Meet the people behind The
                                                Shapes United
                                            </p>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink href="/impact">
                                            <div className="text-sm font-medium leading-none">
                                                Our Impact
                                            </div>
                                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                How we're making a difference
                                            </p>
                                        </NavigationMenuLink>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    href="/ndis"
                                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50"
                                >
                                    NDIS
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    href="/news"
                                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50"
                                >
                                    News & Media
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    href="/what-we-do"
                                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50"
                                >
                                    What We Do
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <Input
                                type="text"
                                placeholder="Search for products..."
                                className="pl-4 pr-10 w-64"
                            />
                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute right-1 top-0 h-9 w-9"
                            >
                                <svg
                                    className="w-4 h-4 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </Button>
                        </div>
                        <Button variant="ghost" size="icon">
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                            </svg>
                        </Button>
                        <Button variant="ghost" size="icon">
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
                                />
                            </svg>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
