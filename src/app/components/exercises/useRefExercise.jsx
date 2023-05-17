import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const block = useRef();
    console.log("block", block);

    const HandlClick = () => {
        block.current.children[0].innerText = "text";
        block.current.style.width = "150px";
        block.current.style.height = "80px";
    };
    const handleClickBack = () => {
        block.current.children[0].innerText = "Блок";
        block.current.style.width = "60px";
        block.current.style.height = "40px";
    };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={block}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small>Блок</small>
            </div>
            <button className="btn btn-secondary my-4" onClick={HandlClick}>
                Кнопка
            </button>
            <button
                className="btn btn-secondary my-4"
                onClick={handleClickBack}
            >
                Отмена
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
