import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Question() {
    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return (
        <Accordion className="w-[65%]">
            <AccordionItem key="1" className="text-[#23e223]" aria-label="Shipping time" title="Shipping time">
                <p>
                    Shipping Policy:<br />
                    <br />
                    At Everstudioz, we strive to provide you with a delightful shopping experience from start to finish. Here are the details of our shipping policy:<br />
                    <br />
                    1. Order Processing Time:<br />
                    - Once your order is received, it will be processed within 2-5 business days.<br />
                    - Please note that processing time may be slightly longer during peak seasons or promotional periods.<br />
                    <br />
                    2. Shipping Methods:<br />
                    - We offer reliable shipping services to ensure your package arrives safely and on time.<br />
                    - The available shipping methods will be displayed at checkout, and you can choose the one that best suits your needs.<br />
                    <br />
                    3. Shipping Destinations:<br />
                    - We ship worldwide<br />
                    <br />
                    4. Shipping Fees:<br />
                    - Shipping fees are calculated based on the weight, size, and destination of your order.<br />
                    - The total shipping cost will be displayed during the checkout process.<br />
                    <br />
                    5. Estimated Delivery Time:<br />
                    - Standard shipping usually takes 7-21 business days, while expedited options may offer faster delivery.<br />
                    <br />
                    6. Shipping Issues:<br />
                    - In the unlikely event of any shipping issues or delays, please don't hesitate to contact our dedicated customer support team.<br />
                    - We will work diligently to resolve any problems and ensure your satisfaction.<br />
                </p>
            </AccordionItem>
            <AccordionItem key="2" className="text-[#23e223]" aria-label="Returns" title="Returns">
                <p>
                    We have a 30-day return policy, which means you have 30 days after receiving your item to request a return.<br />
                    <br />
                    To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You’ll also need the receipt or proof of purchase.<br />
                    <br />
                    To start a return, you can contact us at Everstudioz@gmail.com<br />
                    <br />
                    If your return is accepted, we’ll send you a return shipping label, as well as instructions on how and where to send your package. Items sent back to us without first requesting a return will not be accepted.<br />
                    <br />
                    You can always contact us for any return question at Everstudioz@gmail.com<br />
                    <br />
                    Damages and issues<br />
                    Please inspect your order upon reception and contact us immediately if the item is defective, damaged or if you receive the wrong item, so that we can evaluate the issue and make it right.<br />
                    <br />
                    Exceptions / non-returnable items
                    Certain types of items cannot be returned, like perishable goods (such as food, flowers, or plants), custom products (such as special orders or personalized items), and personal care goods (such as beauty products). We also do not accept returns for hazardous materials, flammable liquids, or gases. Please get in touch if you have questions or concerns about your specific item.<br />
                    <br />
                    Unfortunately, we cannot accept returns on sale items or gift cards.
                </p>
            </AccordionItem>
            <AccordionItem key="3" className="text-[#23e223]" aria-label="Track my order" title="Track my order">
                <p>After your order is shipped, we will provide you with a tracking number via email.<br />
                    - You can use this tracking number to monitor the progress of your shipment on our website, the shop app or the shipping carrier's website.<br />
                    - We will keep you informed about your order status via email.<br />
                    - You will receive notifications regarding order confirmation, shipment, and delivery updates.<br />
                </p>
            </AccordionItem>
        </Accordion>
    );
}
