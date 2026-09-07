const Header = () => {
  return (
        <div className="flex justify-between items-center py-8 px-18">
            <h3 className="text-3xl font-bold">Furnimart<span className="text-yellow-600">.</span></h3>
           <div className="flex gap-10 px-12 text-lg font-semibold">
            <button>SHOP</button>
            <button>ABOUT</button>
            <button>COLLECTIONS</button>
            <button>BLOG</button>
            <button>CONTACT</button>
           </div>
           <div className="flex gap-10 px-12 text-lg font-semibold">
            <button> <i className="ri-shopping-cart-line"></i> CART (0) </button>
            <button> <i className="ri-search-line"></i> SEARCH</button>
           </div>
    </div>
  )
}

export default Header