import React, {useState} from 'react'
import './CardDptoState.sass'
import ModalVeredasInfo from '../Modal/ModalVeredasInfo';

const CardDptoState = ({title, itemVeredafilter}) => {
  const [selected, setSelected] = useState("");
  const handleOptionChange = (event) => {
    setSelected(event.target.value);
  };
  return (
      <div className="card w-full bg-base-100 shadow-md p-0">
        <div className="card-body p-5">
          <h2 className="card-title center mb-5">
            {title}
          </h2>
          <form className="space-y-4 p-0">
            <div className="inputGroup  mb-1">
              <input type="checkbox" name="item" id={`item1${itemVeredafilter}`} className='hidden' selected={selected} onOptionChange={handleOptionChange}/>
              <label htmlFor={`item1${itemVeredafilter}`} >
                <div className="content">
                  <div className="flex gap-3">
                    <div className="colorItem color1">

                    </div>
                    <div className="titleItem">
                      <h5 className='font-medium text-sm'>128 VEREDAS</h5>
                    </div>
                  </div>
                  
                  <div className="info">
                    <ModalVeredasInfo />
                  </div>
                </div>  
              </label>
            </div>

            <div className="inputGroup  mb-1">
              <input type="checkbox" name="item" id={`item2${itemVeredafilter}`} className='hidden' selected={selected} onOptionChange={handleOptionChange}/>
              <label htmlFor={`item2${itemVeredafilter}`} >
                <div className="content">
                  <div className="flex gap-3">
                    <div className="colorItem color2">

                    </div>
                    <div className="titleItem">
                      <h5 className='font-medium text-sm'>128 VEREDAS</h5>
                    </div>
                  </div>
                  <div className="info">
                    <ModalVeredasInfo />
                  </div>
                </div>  
              </label>
            </div>

            <div className="inputGroup  mb-1">
              <input type="checkbox" name="item" id={`item3${itemVeredafilter}`} className='hidden'/>
              <label htmlFor={`item3${itemVeredafilter}`} selected={selected} onOptionChange={handleOptionChange}>
                <div className="content">
                  <div className="flex gap-3">
                    <div className="colorItem color3">

                    </div>
                    <div className="titleItem">
                      <h5 className='font-medium text-sm'>128 VEREDAS</h5>
                    </div>
                  </div>
                  <div className="info">
                    <ModalVeredasInfo />
                  </div>
                </div>  
              </label>
            </div>

            <div className="inputGroup  mb-1">
              <input type="checkbox" name="item" id={`item4${itemVeredafilter}`} className='hidden'/>
              <label htmlFor={`item4${itemVeredafilter}`} selected={selected} onOptionChange={handleOptionChange}>
                <div className="content">
                  <div className="flex gap-3">
                    <div className="colorItem color4">

                    </div>
                    <div className="titleItem">
                      <h5 className='font-medium text-sm'>128 VEREDAS</h5>
                    </div>
                  </div>
                  <div className="info">
                    <ModalVeredasInfo />
                  </div>
                </div>  
              </label>
            </div>

            <div className="inputGroup  mb-1">
              <input type="checkbox" name="item" id={`item5${itemVeredafilter}`} className='hidden'/>
              <label htmlFor={`item5${itemVeredafilter}`} selected={selected} onOptionChange={handleOptionChange}>
                <div className="content">
                  <div className="flex gap-3">
                    <div className="colorItem color1">

                    </div>
                    <div className="titleItem">
                      <h5 className='font-medium text-sm'>128 VEREDAS</h5>
                    </div>
                  </div>
                  <div className="info">
                    <ModalVeredasInfo />
                  </div>
                </div>  
              </label>
            </div>
          </form>
          
        </div>
      </div>
  )
}

export default CardDptoState