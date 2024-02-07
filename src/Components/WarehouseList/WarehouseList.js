import './WarehouseList.scss';
import '../../Style/Partials/_global.scss'

import deleteIcon from '../../assets/Icons/delete_outline-24px.svg';
import editIcon from '../../assets/Icons/edit-24px.svg';
import sortIcon from '../../assets/Icons/sort-24px.svg';
import chevronIcon from '../../assets/Icons/chevron_right-24px.svg';
import searchIcon from '../../assets/Icons/search-24px.svg';

function WarehouseList () {
    return (
        <div className="warehouselist">
            <div className="warehouselist__header"> 
                <div className="warehouselist__header__title"> 
                    <h1>Warehouses</h1>
                </div>
                <div className="warehouselist__header__search">

                     <input placeholder="Search..." name="search" type="input"></input>
                     <img className="warehouselist__header__search__icon" src={searchIcon} alt="search icon"/>
                </div>
                <div className="warehouselist__header__addbutton"> 
                    <button>+ Add new Warehouse</button>
                </div>
            </div>   
            
            <div className="warehouselist__items">
                <div className="warehouselist__items__row warehouselist__items__headerrow">
                    <div className="warehouselist__items__row__field"> 
                        <p>WAREHOUSE</p>
                        <img src={sortIcon} alt="sort icon"/>
                    </div>
                    <div className="warehouselist__items__row__field">
                        <p>ADDRESS</p>
                        <img src={sortIcon} alt="sort icon"/>
                    </div>
                    <div className="warehouselist__items__row__field">
                        <p>CONTACT NAME</p>
                        <img src={sortIcon} alt="sort icon"/>
                    </div>
                    <div className="warehouselist__items__row__field">
                        <p>CONTACT INFORMATION</p>  
                        <img src={sortIcon} alt="sort icon"/>
                    </div>
                    <div className="warehouselist__items__row__field">
                        <p>ACTIONS</p>
                        <img src={sortIcon} alt="sort icon"/>
                    </div>
                </div>

                <div className="warehouselist__items__row">
                    <div className="warehouselist__items__row__field"> 
                        <p><a href="#">Manhattan</a></p>
                        <img className="warehouselist__items__row__field__name" src={chevronIcon} alt="arrow icon"/>
                    </div>
                    <div className="warehouselist__items__row__field">
                        <p>503 Broadway, New York, USA</p>
                    </div>
                    <div className="warehouselist__items__row__field">
                        <p>Parmin Aujla</p>
                    </div>
                    <div className="warehouselist__items__row__field">
                        <p>+1 (629) 555-0129 Paulja@instock.com</p>  
                    </div>
                    <div className="warehouselist__items__row__field warehouselist__items__row__action">
                        <button>
                            <img src={deleteIcon} alt="delete button"/>
                        </button>
                        <button>
                             <img src={editIcon} alt="edit button"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WarehouseList;