import { useState, useCallback, useMemo } from 'react';

export interface HeaderState {
  isApplicationsOpen: boolean;
  isRessourcenOpen: boolean;
  isKontaktOpen: boolean;
  isMobileMenuOpen: boolean;
}

export const useHeaderState = () => {
  const [state, setState] = useState<HeaderState>({
    isApplicationsOpen: false,
    isRessourcenOpen: false,
    isKontaktOpen: false,
    isMobileMenuOpen: false,
  });

  // Batched state updates to prevent multiple re-renders
  const updateState = useCallback((updates: Partial<HeaderState>) => {
    setState(prev => ({ ...prev, ...updates }));
  }, []);

  // Memoized actions to prevent recreation on every render
  const actions = useMemo(() => ({
    toggleApplications: () => updateState({
      isApplicationsOpen: !state.isApplicationsOpen,
      isRessourcenOpen: false,
      isKontaktOpen: false
    }),

    toggleRessourcen: () => updateState({
      isRessourcenOpen: !state.isRessourcenOpen,
      isApplicationsOpen: false,
      isKontaktOpen: false
    }),

    toggleKontakt: () => updateState({
      isKontaktOpen: !state.isKontaktOpen,
      isApplicationsOpen: false,
      isRessourcenOpen: false
    }),

    toggleMobileMenu: () => updateState({
      isMobileMenuOpen: !state.isMobileMenuOpen
    }),

    closeAllDropdowns: () => updateState({
      isApplicationsOpen: false,
      isRessourcenOpen: false,
      isKontaktOpen: false,
    }),

    closeAll: () => updateState({
      isApplicationsOpen: false,
      isRessourcenOpen: false,
      isKontaktOpen: false,
      isMobileMenuOpen: false,
    }),
  }), [state, updateState]);

  return { state, actions };
};