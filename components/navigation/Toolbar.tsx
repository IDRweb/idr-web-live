import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useMediaQuery from "../../hooks/useMediaQuery";
import Exit_Icon from "../SVG/Exit_Icon";
import Link from "next/link";
import Image from "next/image";
import Menu_Icon from "../SVG/Menu_Icon";
import Arrow_Icon from "../SVG/Arrow_Icon";
import { useTranslations } from 'next-intl';

interface ToolbarProps {
  useWhite?: boolean;
  children: React.ReactNode;
}

export const Toolbar = ({ useWhite = false, children }: ToolbarProps) => {
    const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
    const isDesktop = useMediaQuery('(min-width: 1025px)');
    const toolbarClass = useWhite ? 'ToolbarWhite' : 'Toolbar';
    const router = useRouter();
    const t = useTranslations('navigation');

  // Reset burger menu state on navigation
  useEffect(() => {
    const handleRouteChange = () => setBurgerMenuOpen(false);
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router]);

    if (isDesktop) {
        return (
            <div className={toolbarClass}>
                <div className="ToolbarInner">
                    <div className="AppName">
                        <Link href="/">
                              <div className="toolbar-logo">
                                <Link href="/" target="_blank" rel="noopener noreferrer">
                                <Image alt="IDR Logo" src='/logos/logo.png' width={866} height={414} loading="eager"/>
                                </Link>
                              </div>
                        </Link>
                    </div>
                    <div className='row'>
                      <div className="ToolbarMenu">
                          {children}
                      </div>
                      <div className="ButtonGroup right">
                          <div className="AppBtn">
                            <Link target="blank" href="https://clients.idr.cat/"><button>{t('clientArea')}<Arrow_Icon /></button></Link>
                          </div>
                      </div>
                    </div>

                </div>
            </div>
        );
      }

      return (
        <div className={toolbarClass}>
          <div className="ToolbarInner">
            <div className="AppName">
              <Link href="/">
                <div className="toolbar-logo">
                  <Image alt="IDR Logo" src="/logos/logo.png"
                    width={866} height={414} loading="eager"
                  />
                </div>
              </Link>
            </div>
            <div className="ToolbarMenu">
              <div className="MenuHamburger">
                <button onClick={() => setBurgerMenuOpen(!burgerMenuOpen)}>
                  <Menu_Icon />
                </button>
              </div>
            </div>
            <div
              className={`ToolbarMenuBackdrop ${burgerMenuOpen ? "open" : ""}`}
              onClick={() => setBurgerMenuOpen(false)}
            >
              {burgerMenuOpen && (
                <div className={`ToolbarMenuBox ${burgerMenuOpen ? "open" : ""}`}>
                  <div className="MenuClose">
                    <div className="AppName">
                      <Link href="/">
                        <div className="toolbar-logo">
                          <Image
                            alt="IDR Logo"
                            src="/logos/logo-black.png"
                            width={866}
                            height={414}
                            loading="eager"
                          />
                        </div>
                      </Link>
                    </div>
                    <button onClick={() => setBurgerMenuOpen(false)}>
                      <Exit_Icon />
                    </button>
                  </div>
                  {children}
                  <div className="MenuLinks Extra">
                    <Link target="_blank" href="https://clients.idr.cat/">
                      {t('clientArea')}
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    };