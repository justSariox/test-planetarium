import s from './ip-area.module.scss'
import {ChangeEvent, Fragment} from "react";
import {Input} from "@/ui/input/input";

type IpAreaProps = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const octets = ["octet1", "octet2", "octet3", "octet4"];
export const IpArea = ({onChange}: IpAreaProps) => {
    return (
        <div className={s.areaWrapper}>

            <div className={s.inputsWrapper}>
                {octets.map((octet, index) => (
                    <Fragment key={octet}>
                        {index !== 0 && <span className={s.ipSeparator}>.</span>}
                        <Input

                            maxLength={3}
                            name={octet}
                            onChange={onChange}
                            placeholder={index === 0 ? 'IP' : undefined}
                            label={index === 0 ? "Хост" : undefined}
                            className={ s.ipInput }

                        />
                    </Fragment>
                ))}
            </div>
        </div>
    )
}