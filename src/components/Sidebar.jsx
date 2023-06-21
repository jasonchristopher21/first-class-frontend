import React from 'react'
import { icon_cart, icon_home, icon_menubar, icon_order } from '../assets'

export const Sidebar = () => {
  return (
    <div>
        <ul>
            <li>
                <button>
                    <img src={icon_menubar} />
                </button>
            </li>
        </ul>

        <ul>
            <li>
                <button>
                    <img src={icon_home} />
                </button>
            </li>
        </ul>

        <ul>
            <li>
                <button>
                    <img src={icon_cart} />
                </button>
            </li>
        </ul>

        <ul>
            <li>
                <button>
                    <img src={icon_order} />
                </button>
            </li>
        </ul>
    </div>
  )
}
