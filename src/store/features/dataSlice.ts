import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Reducer } from '@reduxjs/toolkit';
import workspacesData from '../../utils/data.json';

export interface WorkspaceData {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  city: string;
  state: string;
  country: string;
  postal_code: string;
  description: string | null;
  rules: string | null;
  amenities: string[] | null;
  images: string[];
  working_hours_start: string;
  working_hours_end: string;
  facilities: string | null;
  is_active: boolean;
  is_day_pass_enabled: boolean;
  day_pass_price: number;
  day_pass_discounts_percentage: {
    [key: string]: {
      value: number;
      message: string;
    };
  };
  manager_id: string | null;
  can_edit?: boolean;
}

export interface DataState {
  workspaces: WorkspaceData[];
  selectedWorkspace: WorkspaceData | null;
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  workspaces: workspacesData as WorkspaceData[],
  selectedWorkspace: null,
  loading: false,
  error: null,
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setSelectedWorkspace: (state, action: PayloadAction<string>) => {
      state.selectedWorkspace = state.workspaces.find(
        workspace => workspace.id === action.payload
      ) || null;
    },
    clearSelectedWorkspace: (state) => {
      state.selectedWorkspace = null;
    },
    setWorkspaces: (state, action: PayloadAction<WorkspaceData[]>) => {
      state.workspaces = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setSelectedWorkspace,
  clearSelectedWorkspace,
  setWorkspaces,
  setLoading,
  setError,
} = dataSlice.actions;

const dataReducer: Reducer<DataState> = dataSlice.reducer;
export default dataReducer;
