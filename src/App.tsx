import { useTranslation } from "react-i18next";
import "./app.css"
import { Button } from "./Components/Button/Button";
import { Input } from "./Components/Input/Input";
import { Switch } from "./Components/switch/Switch";
import { useGeneratorPassword } from "./hook/useGeneratorPassword";

export const App = () => {
    const { t } = useTranslation();

    const {
        handleGeneratorPassword,
        handleCopyText,
        handleLength,
        setLong,
        password,
        renderOptions,
        inputRef,
        long
    } = useGeneratorPassword();

    return (
        <section className='section-app'>
            <h1>{t("title")}</h1>
            <Input
                value={password}
                ref={inputRef}

            />
            <div>
                <Button onClick={handleGeneratorPassword}>{t("buttons.generate")}</Button>
                <Button onClick={handleCopyText}>{t("buttons.copy")}</Button>
            </div>
            <div>
                <button onClick={() => handleLength(false)}>-</button>
                <input 
                value={long} onChange={(e) => {
                    const value = e.target.valueAsNumber;
                    setLong(isNaN(value) ? 0 : value);
                }} 
                
                type="number" />
                <button onClick={() => handleLength(true)}>+</button>
            </div>
            {renderOptions.map((item) => (
                <div className="container-options" key={item.label}>
                    <p>{t(`${item.label}`)}</p>
                    <Switch
                        checked={item.active}
                        onChange={item.onChange}
                    />
                </div>
            ))}

        </section>
    );
}