export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          cookie: string | null
          created_at: string
          email: string
          id: string
          password: string
        }
        Insert: {
          cookie?: string | null
          created_at?: string
          email: string
          id: string
          password: string
        }
        Update: {
          cookie?: string | null
          created_at?: string
          email?: string
          id?: string
          password?: string
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
