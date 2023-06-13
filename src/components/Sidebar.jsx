import React from 'react'
import { HiOutlineMenuAlt2, HiOutlineHome } from 'react-icons/hi'
import { CiShoppingCart, CiDeliveryTruck } from 'react-icons/ci'

export const Sidebar = () => {
  return (
    <div>
        <ul>
            <li>
                <button>
                    <HiOutlineMenuAlt2 />
                </button>
            </li>
        </ul>

        <ul>
            <li>
                <button>
                    <HiOutlineHome/>
                </button>
            </li>
        </ul>

        <ul>
            <li>
                <button>
                    <CiShoppingCart />
                </button>
            </li>
        </ul>

        <ul>
            <li>
                <button>
                    <CiDeliveryTruck />
                </button>
            </li>
        </ul>
    </div>
  )
}
