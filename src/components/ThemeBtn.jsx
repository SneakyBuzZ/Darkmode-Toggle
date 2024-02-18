import useTheme from "../contexts/themeContext";

export default function ThemeBtn() {

    const { theme, darkmode, lightmode } = useTheme();

    const themeChange = (e) => {
        const isDark = e.currentTarget.checked;
        if (isDark) {
            darkmode();
        } else {
            lightmode();
        }
    }

    return (
        <div className="button w-1/4 flex justify-center mx-auto mt-10">
            <label className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    onChange={themeChange}
                    checked={theme === "dark"}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 dark:peer-focus:ring-gray-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600"></div>
                <span className="ml-3 text-xl font-medium text-gray-900">Theme</span>
            </label>
        </div>
    );
}

