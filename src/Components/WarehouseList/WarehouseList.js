import React, { useState } from 'react';

import './WarehouseList.scss';
import '../../Style/Partials/_global.scss'

import deleteIcon from '../../assets/Icons/delete_outline-24px.svg';
import editIcon from '../../assets/Icons/edit-24px.svg';
import sortIcon from '../../assets/Icons/sort-24px.svg';
import chevronIcon from '../../assets/Icons/chevron_right-24px.svg';
import searchIcon from '../../assets/Icons/search-24px.svg';

import DeleteModal from '../../Components/DeleteModal/DeleteModal'

function WarehouseList () {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="warehouselist">
            <div className="warehouselist__header"> 
                <div className="warehouselist__header__title"> 
                    <h1>Warehouses</h1>
                    <DeleteModal />
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
                        <p className="warehouselist__items__row__field__mobileonly">WAREHOUSE</p>
                        <img src={sortIcon} alt="sort icon"/>
                    </div>
                    <div className="warehouselist__items__row__field">
                        <p className="warehouselist__items__row__field__mobileonly">ADDRESS</p>
                        <img src={sortIcon} alt="sort icon"/>
                    </div>
                    <div className="warehouselist__items__row__field">
                        <p className="warehouselist__items__row__field__mobileonly">CONTACT NAME</p>
                        <img src={sortIcon} alt="sort icon"/>
                    </div>
                    <div className="warehouselist__items__row__field warehouselist__items__row__contactinfo">
                        <p className="warehouselist__items__row__field__mobileonly">CONTACT INFORMATION</p>  
                        <img src={sortIcon} alt="sort icon"/>
                    </div>
                    <div className="warehouselist__items__row__field warehouselist__items__row__action">
                        <p className="warehouselist__items__row__field__mobileonly">ACTIONS</p>
                    </div>
                </div>

                <div className="warehouselist__items__row">
                    <div className="warehouselist__items__row__item">
                        <div className="warehouselist__items__row__item__mobileonly">
                            <p>WAREHOUSE</p>
                        </div>
                        <div className="warehouselist__items__row__item__name warehouselist__items__row__item__namelink">
                            <p>
                                <a href="#">Manhattan</a>
                            </p>
                            <img className="warehouselist__items__row__item__name" src={chevronIcon} alt="arrow icon"/>
                        </div>
                    </div>
                    <div className="warehouselist__items__row__item">
                        <div className="warehouselist__items__row__item__mobileonly">
                            <p>CONTACT NAME</p>
                        </div>
                        <div>
                            <p>Pamin</p>
                        </div>
                    </div>
                    <div className="warehouselist__items__row__item">
                        <div className="warehouselist__items__row__item__mobileonly">
                            <p>ADDRESS</p>
                        </div>
                        <div>
                            <p>503 Broadway, New York, USA</p>
                        </div>
                    </div>
                    <div className="warehouselist__items__row__item warehouselist__items__row__contactinfo">
                        <div className="warehouselist__items__row__item__mobileonly">
                            <p>CONTACT INFORMATION</p>
                        </div>
                        <div>
                            <p>+1 (629) 555-0129</p> 
                            <p>Paulja@instock.com</p>
                        </div>
                    </div>
                    <div className="warehouselist__items__row__actioncol">
                        <div>
                            <button className="warehouselist__items__row__actioncol__btns" onClick={openModal}>
                                <img src={deleteIcon} alt="delete button"/>
                            </button>
                            <DeleteModal isOpen={isModalOpen} closeModal={closeModal} warehouseName={'Manhattan'} />
                        </div>
                       <div>
                            <button className="warehouselist__items__row__actioncol__btns">
                                <img src={editIcon} alt="edit button"/>
                            </button>
                       </div>
                    </div>
                </div>
                <div className="warehouselist__items__row">
                    <div className="warehouselist__items__row__item">
                        <div className="warehouselist__items__row__item__mobileonly">
                            <p>WAREHOUSE</p>
                        </div>
                        <div className="warehouselist__items__row__item__name warehouselist__items__row__item__namelink">
                            <p>
                                <a href="#">Manhattan</a>
                            </p>
                            <img className="warehouselist__items__row__item__name" src={chevronIcon} alt="arrow icon"/>
                        </div>
                    </div>
                    <div className="warehouselist__items__row__item">
                        <div className="warehouselist__items__row__item__mobileonly">
                            <p>CONTACT NAME</p>
                        </div>
                        <div>
                            <p>Pamin</p>
                        </div>
                    </div>
                    <div className="warehouselist__items__row__item">
                        <div className="warehouselist__items__row__item__mobileonly">
                            <p>ADDRESS</p>
                        </div>
                        <div>
                            <p>503 Broadway, New York, USA</p>
                        </div>
                    </div>
                    <div className="warehouselist__items__row__item warehouselist__items__row__contactinfo">
                        <div className="warehouselist__items__row__item__mobileonly">
                            <p>CONTACT INFORMATION</p>
                        </div>
                        <div>
                            <p>+1 (629) 555-0129</p> 
                            <p>Paulja@instock.com</p>
                        </div>
                    </div>
                    <div className="warehouselist__items__row__actioncol">
                        <div>
                            <button className="warehouselist__items__row__actioncol__btns" onClick={openModal}>
                                <img src={deleteIcon} alt="delete button"/>
                            </button>
                            <DeleteModal isOpen={isModalOpen} closeModal={closeModal} warehouseName={'Manhattan'} />
                        </div>
                       <div>
                            <button className="warehouselist__items__row__actioncol__btns">
                                <img src={editIcon} alt="edit button"/>
                            </button>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WarehouseList;