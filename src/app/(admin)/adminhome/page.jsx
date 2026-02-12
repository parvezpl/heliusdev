import React from 'react'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="admin-page container">
      <div className="panel pad-lg">
        <h1 className="panel-title">Admin Home</h1>
        <p className="panel-subtitle">Manage users, payments, and content from a single place.</p>
      </div>
      <div className="card-grid-2">
        <Link href="/adminhome/users" className="card-link">
          <div className="card-link-meta">Users</div>
          <h2 style={{ marginTop: '.5rem' }}>User Management</h2>
          <p className="card-link-copy">View, edit, and manage user accounts.</p>
        </Link>
        <Link href="/adminhome/payments" className="card-link">
          <div className="card-link-meta">Payments</div>
          <h2 style={{ marginTop: '.5rem' }}>Payment Insights</h2>
          <p className="card-link-copy">Track subscriptions and transaction history.</p>
        </Link>
      </div>
    </div>
  )
}
