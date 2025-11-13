import { writable } from "svelte/store";

export type ThemeMode = "light" | "dark";

/**
 * 현재 테마 상태 저장
 */
export const theme = writable<ThemeMode>("light");

/**
 * 테마 전환 버튼 클릭 시 실행
 */
export function toggleTheme() {
    theme.update(current => {
        const next: ThemeMode = current === "light" ? "dark" : "light";

        document.documentElement.classList.toggle("dark", next === "dark");
        localStorage.setItem("theme", next);

        return next;
    });
}

/**
 * 브라우저 최초 로드 시 호출되는 초기 테마 설정
 */
export function initTheme(): ThemeMode {
    // 로컬 저장된 테마 우선
    const saved = localStorage.getItem("theme") as ThemeMode | null;

    // 브라우저 시스템 테마
    const system: ThemeMode =
        window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";

    const mode = saved ?? system;

    document.documentElement.classList.toggle("dark", mode === "dark");

    return mode;
}
