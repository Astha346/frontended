
import { navLinks } from '../../constant/Navlink';
import { Logo } from '../../image'
type ResponsiveMenuProps= {
    showMenu: boolean
}
export const Responsive = ({showMenu}: ResponsiveMenuProps) => {
  return (
    <div className={`${showMenu ? "left-0": "left-[-100%]"} fixed`}>
        <img src={Logo} alt="" className="w-20" />
        <div>
            <ul>
                {navLinks.map((item)=>(
                    <li key={item.id}>
                        <a href={item.path}>{item.name}</a>
                    </li>

                ))}
            </ul>
        </div>
        <button>join now</button>
    </div>
  )
}

export default Responsive;