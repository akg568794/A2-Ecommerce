import React, { useEffect, useState } from 'react'
import SummaryApi from '../common';
import moment from 'moment';
import displayINRCurrency from '../helpers/displayCurrency';

const OrderPage = () => {
  const [data, setData] = useState([]);

  const fetchorderDetails = async () => {
    const response = await fetch(SummaryApi.getOrder.url, {
      method: SummaryApi.getOrder.method,
      credentials: "include"
    });
    const responseData = await response.json();
    setData(responseData.data);
    console.log(responseData);
    // console.log("hello world");
  };

  useEffect(() => {
    fetchorderDetails();
  }, []);

  return (
    <div>
      {
        !data[0] && (
          <p>No order Available</p>
        )
      }
      <div>
        {
          <div className='p-4 '>
            {
              data.map((item, index) => {
                return (
                  <div key={item.userId + index}>
                    <p className='font-medium text-lg'>{moment(item.createdAt).format('LL')}</p>
                    <div className='border rounded'>
                      <div className='flex flex-col lg:flex-row justify-between'>
                          <div className='grid gap-1'>
                          {
                            item?.productDetails.map((product,index)=>{
                              return(
                                <div key={product.productId+index} className='flex gap-3 bg-slate-100'>
                                  <img className='w-28 h-28 bg-slate-200 object-scale-down p-2' src={product.image[0]}/>
                                  <div>
                                    <div className='font-medium text-lg text-ellipsis line-clamp-1'>{product.name}</div>
                                    <div className='flex items-center gap-5 mt-1'>
                                      <div className='text-lg text-red-500'>{displayINRCurrency(product.price)}</div>
                                      <p>Quantity: {product.quantity}</p>
                                    </div>
                                  </div>
                                </div>
                                
                              )
                            })
                          }
                        </div>
                        <div className='flex flex-col  gap-4 p-2 min-w-[320px]'>
                        <div>
                          <div className='text-lg font-medium'>Payment Details:</div>
                          <p className=' ml-1 '>Payment Method: {item.paymentDetails.payment_method_type[0]}</p>
                          <p className=' ml-1'>Payment Status: {item.paymentDetails.payment_status}</p>
                        </div>
                        <div>
                          <div className='text-lg font-medium'>Shipping Details</div>
                          {
                            item.shipping_options.map((shipping,index)=>{
                              return(
                                <div className=' ml-1' key={index}>Shipping Amount : {shipping.shipping_amount}</div>
                              )
                            })
                          }
                        </div>
                        </div>
                      </div>
                    <div className='font-semibold ml-auto w-fit lg:text-lg'>
                      Total Amount: {item.totalAmount}
                    </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        }
      </div>
    </div>
  );
};

export default OrderPage;
