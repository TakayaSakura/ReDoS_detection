import networkx as nx

G = nx.DiGraph()
G.add_edges_from([(0, 1), (0, 2), (1, 1), (1, 2), (2, 1), (2, 2)])

automaton = list(nx.strongly_connected_components(G))
print(automaton)
