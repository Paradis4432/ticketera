"use client"

import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {getProviders, signIn, signOut} from 'next-auth/react';

function Nav(props) {
    const loggedIn = true;

    const [toggleDropdown, setToggleDropdown] = useState(false)
    const [providers, setProviders] = useState(null);

    useEffect(() => {
        const getProvs = async () => {
            const providers = await getProviders();
            setProviders(providers);
        }

        getProvs();
    }, []);


    return (
        <nav className="flex-between w-full mb-16 pt-3">
            <Link href={"/"} className={"flex gap-2 flex-center"}>
                <Image src={"/assets/images/logo.svg"}
                       alt={"logo"}
                       width={40}
                       height={40}
                       className={"object-contain"}
                />
                <p className="logo_text">ticketera</p>
            </Link>

            <div className={"sm:flex hidden"}>
                {loggedIn ? (
                    <div className={"flex gap-3 md:gap-5"}>
                        <Link href={"/create-prompt"}
                              className={"black_btn"}> create post
                        </Link>

                        <button type="button" onClick={signOut}>
                            signout
                        </button>

                        <Link href={"/profile"}>
                            <Image src={"/assets/images/logo.svg"}
                                   alt={"user"}
                                   width={37}
                                   height={37}
                                   className={"object-contain"}
                            />
                        </Link>
                    </div>
                ) : (
                    <>
                        {providers && Object.values(providers).map(provider => (
                            <button type={"button"}
                                    key={provider.name}
                                    className={"black_btn"}
                                    onClick={() => signIn(provider.id)}>
                                Sign in with {provider.name}
                            </button>
                        ))}
                    </>
                )}
            </div>

            <div className="sm:hidden flex relative">
                {loggedIn ? (
                    <div className="flex">
                        <Image src={"/assets/images/logo.svg"}
                               alt={"user"}
                               width={37}
                               height={37}
                               className={"object-contain rounded-full"}
                               onClick={() => setToggleDropdown((prev) => !prev)}
                        />

                        {toggleDropdown && (
                            <div className="dropdown">
                                <Link href={"/profile"}
                                      className={"dropdown_link"}
                                      onClick={() => setToggleDropdown(false)}
                                > My Profile
                                </Link>

                                <Link href={"/create-prompt"}
                                      className={"dropdown_link"}
                                      onClick={() => setToggleDropdown(false)}
                                > create prompt
                                </Link>

                                <button type="button"
                                        className={"mt-5 w-full black_btn"}
                                        onClick={() => {
                                            setToggleDropdown(false);
                                            signOut();
                                        }}
                                > sign out
                                </button>
                            </div>
                        )}
                    < /div>
                ) : (
                    <>
                        {providers && Object.values(providers).map(provider => (
                            <button type={"button"}
                                    key={provider.name}
                                    className={"black_btn"}
                                    onClick={() => signIn(provider.id)}>
                                Sign in with {provider.name}
                            </button>
                        ))}
                    </>
                )}
            </div>
        </nav>
    );
}

export default Nav;