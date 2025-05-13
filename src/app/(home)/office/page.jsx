'use client'
import Button from "@/app/components/ui/Button";
import Link from "next/link";
import React from "react";
import './office.css'



export default function Page(params) {
    const pdfRef = React.useRef(null);
    const handlePrint = async () => {
        const element = pdfRef.current;

        const win = window.open('', '', 'height=500,width=800');
        // win.document.createElement('html');
        const clone = element.cloneNode(true);
        win.document.body.appendChild(clone)
        
        win.document.close();
        win.focus();
        win.print();
        win.close();
        
    
    }
    return (
        <div className="flex flex-col w-full bg-gray-400 ">
            <h2 className=" flex capitalize place-content-center ">vatshlya portal</h2>
            <div ref={pdfRef} class='printpage'>
                <table className="table-auto border-collapse border border-gray-800 gap-4">
                    <thead>
                        <tr className="flex justify-evenly gap-4">
                            <th>name</th>
                            <th>fathr name</th>
                            <th>address</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr className="flex justify-evenly gap-4">
                            <td>parvez alam</td>
                            <td>sabir ansari</td>
                            <td>turkwaliya dariyav singh</td>
                        </tr>
                    </tbody>
                </table>
                <div className=" border w-64 h-64 bg-amber-300">
                    <h2 className="flex justify-center">vatshlya</h2>
                    <div className="flex justify-center">
                        {/* <Link href={'/office/office'}>office</Link> */}
                    </div>
                </div>

            </div>
            <Button onClick={handlePrint}>
                download
            </Button>
        </div>
    )
}