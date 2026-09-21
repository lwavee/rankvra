import prisma from "@/lib/prisma";
import { Mail, Phone, Globe, Calendar } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function LeadsPage() {
  let leads: any[] = [];
  try {
    leads = await prisma.lead.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch (err) {
    console.error("Failed to fetch leads:", err);
  }

  return (
    <div>
      <h1 className="text-3xl font-black text-slate-900 mb-8">Manage Leads</h1>
      
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 text-slate-900 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-bold">Contact Info</th>
                <th className="px-6 py-4 font-bold">Details</th>
                <th className="px-6 py-4 font-bold">Inquiry / Goals</th>
                <th className="px-6 py-4 font-bold">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {leads.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-slate-500">
                    No leads found yet.
                  </td>
                </tr>
              ) : (
                leads.map((lead: any) => (
                  <tr key={lead.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-bold text-slate-900 mb-1">{lead.name}</div>
                      <div className="flex items-center gap-2 text-xs mb-1">
                        <Mail size={12} className="text-slate-400" />
                        <a href={`mailto:${lead.email}`} className="hover:text-indigo-600 transition-colors">{lead.email}</a>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <Phone size={12} className="text-slate-400" />
                        <a href={`tel:${lead.phone}`} className="hover:text-indigo-600 transition-colors">{lead.phone}</a>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {lead.company && (
                        <div className="text-xs font-semibold mb-1">
                          <span className="text-slate-400 font-normal">Company:</span> {lead.company}
                        </div>
                      )}
                      {lead.source && (
                        <div className="flex items-center gap-1.5 text-xs">
                          <Globe size={12} className="text-slate-400" />
                          <span className="capitalize">{lead.source}</span>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 max-w-[300px]">
                      {lead.primaryGoal && (
                        <div className="mb-2">
                          <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                            {lead.primaryGoal}
                          </span>
                        </div>
                      )}
                      {lead.notes && (
                        <p className="text-xs leading-relaxed text-slate-500 truncate">
                          {lead.notes}
                        </p>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs">
                      <div className="flex items-center gap-1.5 text-slate-500">
                        <Calendar size={12} />
                        {new Date(lead.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric"
                        })}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
